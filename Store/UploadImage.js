import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db, storage } from '../firebaseConfig ';
import * as ImagePicker from "expo-image-picker";

async function uploadImage(uri, fileType) {
    try {
        const response = await fetch(uri);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const blob = await response.blob();
        const storageRef = ref(storage, "Stuff/" + new Date().getTime());

        const uploadTask = uploadBytesResumable(storageRef, blob);

        return new Promise((resolve, reject) => {
            // listen for events
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                    // Uncomment and implement setProgress if needed
                    // setProgress(progress.toFixed());
                },
                (error) => {
                    console.log(error);
                    reject(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        console.log("File available at", downloadURL);
                        // save record
                        await saveRecord(fileType, downloadURL, new Date().toISOString());
                        resolve();
                    }).catch(reject);
                }
            );
        });
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
}

const pickImage = () => {

    return new Promise(async (resolve, reject) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        }, (err) => reject(err));

        if (!result.canceled) {
            resolve(result.assets[0].uri);
        }
    })


};

async function saveRecord(title, url, createdAt) {
    try {
        const docRef = await addDoc(collection(db, "files"), {
            title, url, createdAt
        });
        console.log("document saved correctly", docRef.id);
    } catch (e) {
        console.log(e);
    }
}

export {
    uploadImage,
    pickImage,
    saveRecord
}