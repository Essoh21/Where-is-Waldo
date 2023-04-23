import firebaseApp from "./firbaseApp";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);

const getWinners = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "winners"));
        const winners = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log('winners loaded successfuly', winners);
        return winners
    } catch (err) {
        console.log("error retrieving winners", err);
        return [];
    }
}

export default getWinners;