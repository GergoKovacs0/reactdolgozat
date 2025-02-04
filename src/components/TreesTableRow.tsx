import { useNavigate } from 'react-router-dom';
import Tree from '../types/Tree';

interface TreesTableRowProps {
    tree: Tree;
}

const TreesTableRow = ({ tree }: TreesTableRowProps) => {
    const navigate = useNavigate();
    return (
        <tr
            onClick={() => {
                navigate(`/tree/${tree.id}`);
            }}
        >
            <td>{tree.nev}</td>
            <td>{tree.ar}</td>
            <td>{tree.kategoria.nev}</td>
            <td>{tree.keszlet}</td>
        </tr>
    );
};

export default TreesTableRow;
