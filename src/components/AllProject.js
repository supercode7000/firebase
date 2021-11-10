import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/config'
const AllProject = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        let results = []
        getDocs(collection(db, "projects")).then((querySnapshot) => {
            console.log(querySnapshot.docs)
            querySnapshot.docs.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                results.push({ id: doc.id, ...doc.data() })
            });
            setData(results)
        })

    }, []);
    return (
        <div className="grid">
            {data && data.map(elt =>
                <div key={elt.id}>
                    <h3>{elt.name_project}</h3>
                    <h3>{elt.description_project}</h3>
                </div>
            )
            }
        </div>
    );
}

export default AllProject;