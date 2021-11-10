import { useCollection } from '../hooks/useCollection'
const AllProject = () => {
    const { documents } = useCollection('projects')
    return (
        <div className="grid">
            {documents && documents.map(elt =>
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