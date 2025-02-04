import React, { useEffect, useState } from 'react';
import Tree from '../types/Tree';
import apiClient from '../services/apiClient';
import { useNavigate } from 'react-router-dom';
import TreesTable from '../components/TreesTable';
const Trees = () => {
    const navigate = useNavigate();
    const [trees, setTrees] = useState<Tree[]>([] as Tree[]);

    useEffect(() => {
        apiClient
            .get('/termekek')
            .then((response) => setTrees(response.data))
            .catch((err) => alert(err));
    }, []);

    return (
        <div>
            <h1>Fák</h1>

            {/* {trees.map((tree) => (
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
                    ))} */}
            <TreesTable trees={trees} />

            <button onClick={() => navigate('/new-tree')}>Létrehozás</button>
        </div>
    );
};

export default Trees;
