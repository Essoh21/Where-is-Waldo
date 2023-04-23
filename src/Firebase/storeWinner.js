
import firebaseApp from "./firbaseApp";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp);

const storeWinner = async (winner) => {
    try {
        await addDoc(collection(db, "winners"), winner);
        console.log('Data stored successfuly');
    } catch (err) {
        console.log(err);
    }
}

export default storeWinner