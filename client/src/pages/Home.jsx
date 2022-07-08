import Clients from '../components/Clients';
import Projects from '../components/Projects';
import AddClientModal from '../components/AddClientModal';
import AddProjectModal from '../components/AddProjectModal';

export default function Home(){
    return (
        <>
            <div className="flex gap-33 mb-4">
                <AddClientModal />
                <AddProjectModal />
            </div>
            <Projects />
            <hr />
            <Clients />
        </>
    )
};