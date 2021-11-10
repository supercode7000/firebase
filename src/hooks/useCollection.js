import { useState, useEffect } from 'react';
import { db } from '../firebase/config'

import { collection, onSnapshot } from "firebase/firestore";

export const useCollection = (c) => {
    const [documents, setDocuments] = useState(null);
    useEffect(() => {
        let reference = collection(db, c)
        const unsubscribe = onSnapshot(reference, (querySnapshot) => {
            const results = [];
            querySnapshot.forEach((doc) => {
                results.push({ id: doc.id, ...doc.data() });
            });
            setDocuments(results)
        })
        return () => unsubscribe()
    }, [c]);
    return { documents }
}