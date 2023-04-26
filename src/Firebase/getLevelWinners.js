import firebaseApp from "./firbaseApp";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);

const getLevelWinners = async (level) => {
    try {
        const querySnapshot = await getDocs(collection(db, "winners"));
        const winners = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        winners.sort((a, b) => a.score - b.score);
        const levelWinners = winners.filter(winner => winner.level === level)
        return levelWinners;
    } catch (err) {
        return [];
    }
}

export default getLevelWinners;