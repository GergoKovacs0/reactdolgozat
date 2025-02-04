import { table } from 'console';
import Tree from '../types/Tree';
import TreesTableRow from './TreesTableRow';
interface TreesTableProbs {
    trees: Tree[];
}

const TreesTable = ({ trees }: TreesTableProbs) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Név</th>
                    <th>Ár</th>
                    <th>Kategória</th>
                    <th>Készlet</th>
                </tr>
            </thead>
            <tbody>
                {trees.map((tree) => (
                    <TreesTableRow tree={tree} />
                ))}
            </tbody>
        </table>
    );
};

export default TreesTable;
