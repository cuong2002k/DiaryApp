import { addDoc, collection, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebaseConfig ";
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { uploadImage } from "./UploadImage";

const diaryCollection = "diary"
async function saveRecord(title, content, url, direction, user, createdAt) {
    try {
        const docRef = await addDoc(collection(db, diaryCollection), {
            title,
            content,
            direction,
            url,
            createdAt,
            user,
        });
        console.log("document saved correctly", docRef.id);
    } catch (e) {
        console.log(e);
    }
}

async function deleteDiary(docId) {
    try {
        console.log(docId)
        return new Promise(async (resolve, reject) => {
            // Tham chiếu đến tài liệu trong Firestore
            const docRef = doc(db, diaryCollection, docId);

            // Lấy tài liệu để kiểm tra xem nó có URL hình ảnh hay không
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                const imageUrl = data.direction;
                // Nếu có URL hình ảnh, xóa hình ảnh từ Firebase Storage
                if (imageUrl) {
                    const imageRef = ref(storage, imageUrl);
                    await deleteObject(imageRef)
                        .then(() => console.log('Image successfully deleted from Storage'))
                        .catch((e) => console.log(e));

                }

                // Xóa tài liệu từ Firestore
                await deleteDoc(docRef);
                resolve()
            } else {
                reject("No such document!")
            }
        })
    } catch (error) {
        console.error('Error deleting diary:', error);
    }
}

async function updateDiary(id, title, content, direction, user, createdAt, url) {
    try {
        return new Promise(async (resolve, reject) => {
            // Tham chiếu đến tài liệu trong Firestore
            const docRef = doc(db, diaryCollection, id);

            if (url) {
                const imageUrl = direction;
                // Nếu có URL hình ảnh, xóa hình ảnh từ Firebase Storage
                if (imageUrl) {
                    const imageRef = ref(storage, imageUrl);
                    await deleteObject(imageRef)
                        .then(() => console.log('Image successfully deleted from Storage'))
                        .catch((e) => console.log(e));

                }

                uploadImage(url, "image").then(async (data) => {
                    const { downloadURL, fileDirection } = data;
                    await updateDoc(docRef, {
                        title: title,
                        content: content,
                        url: downloadURL,
                        direction: fileDirection,
                        user: user,
                        createdAt: createdAt
                    });
                    resolve();
                }).catch(reject);

            }
            else {
                await updateDoc(docRef, {
                    title: title,
                    content: content,
                    user: user,
                    createdAt: createdAt
                }).then(() => resolve()).catch(e => reject(e));
            }
            console.log('Document successfully updated!');
        })
    } catch (error) {
        console.error('Error updating diary:', error);
    }
}



export {
    saveRecord,
    deleteDiary,
    updateDiary
}