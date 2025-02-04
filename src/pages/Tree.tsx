import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Tree from '../types/Tree';
import apiClient from '../services/apiClient';
const TreePage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [tree, setTree] = useState<Tree>({
        nev: '',
        ar: 0,
        id: 0,
        kategoria: {
            id: 0,
            nev: '',
        },
        kategoriaId: 0,
        kepUrl: '',
        keszlet: 0,
        leiras: '',
    });
    const [updatedKeszlet, setUpdatedKeszlet] = useState<number>();

    useEffect(() => {
        apiClient
            .get(`/termekek/${id}`)
            .then((response) => {
                setTree(response.data);
            })
            .catch((err) => alert(err));
    }, []);

    const updateKeszlet = () => {
        apiClient
            .put(`/termekek/${id}`, { keszlet: updateKeszlet })
            .then((response) => {
                if (response.status !== 200) {
                    alert('Hiba a frissetes alatt!');
                    return;
                }
                navigate('/');
            })
            .catch((err) => alert(err));
    };

    const deleteTree = () => {
        apiClient.delete(`/termekek/${id}`).then((response) => {
            if (response.status !== 200) {
                alert('A törlés nem volt sikeres!');
                return;
            }
            navigate('/');
        });
    };

    return (
        <div>
            <h1>{tree.nev}</h1>
            <table>
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>{tree.id}</td>
                    </tr>
                    <tr>
                        <td>Név</td>
                        <td>{tree.nev}</td>
                    </tr>
                    <tr>
                        <td>Ár</td>
                        <td>{tree.ar}</td>
                    </tr>
                    <tr>
                        <td>Kategória</td>
                        <td>{tree.kategoria.nev}</td>
                    </tr>
                    <tr>
                        <td>Készlet</td>
                        <td>{tree.keszlet}</td>
                    </tr>
                    <tr>
                        <td>Leírás</td>
                        <td>{tree.leiras}</td>
                    </tr>
                </tbody>
            </table>
            <input type="number" onChange={(e) => setUpdatedKeszlet(parseInt(e.target.value))} />
            <button onClick={updateKeszlet}>Frissítés</button>
            <img
                src={`https://faiskola.richardkorom.hu/api/kepek/${tree.kepUrl}`}
                alt={`Kép egy ${tree.nev}`}
            />
            <button onClick={deleteTree}>Törlés</button>
        </div>
    );
};

export default TreePage;
