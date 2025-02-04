import React, { useEffect, useState } from 'react';
import apiClient from '../services/apiClient';
import { useNavigate } from 'react-router-dom';
import Category from '../types/Category';

const NewTree = () => {
    const navigat = useNavigate();
    const [nev, setNev] = useState<string>();
    const [kategoriaId, setKategoriaId] = useState<number>();
    const [kepUrl, setKepUrl] = useState<string>();
    const [keszlet, setKeszlet] = useState<number>();
    const [leiras, setLeiras] = useState<string>();
    const [ar, setAr] = useState<number>();

    const [kategoriak, setKategoriak] = useState<Category[]>([]);

    useEffect(() => {
        apiClient
            .get('/kategoriak')
            .then((response) => setKategoriak(response.data))
            .catch((err) => alert('Hiba a kategoriak lekerdezese soran!'));
    }, []);

    const saveTree = () => {
        apiClient
            .post('/termekek', {
                ar,
                kategoriaId,
                kepUrl,
                keszlet,
                leiras,
                nev,
            })
            .then((response) => {
                if (response.status !== 201) {
                    alert('Hiba a létrehozás során!');
                    return;
                }
                navigat('/');
            });
    };

    return (
        <div className="container">
            <div className="row">
                <h1>Új fa</h1>
            </div>
            <div className="row">
                <label>Név:</label>
                <input type="text" onChange={(e) => setNev(e.target.value)} />
            </div>
            <div className="row">
                <label>Ár:</label>
                <input type="number" onChange={(e) => setAr(parseInt(e.target.value))} />
            </div>
            <div className="row">
                <label>Kép:</label>
                <input type="text" onChange={(e) => setKepUrl(e.target.value)} />
            </div>
            <div className="row">
                <label>Készlet</label>
                <input type="number" onChange={(e) => setKeszlet(parseInt(e.target.value))} />
            </div>
            <div className="row">
                <label>Leírás</label>
                <input type="text" onChange={(e) => setLeiras(e.target.value)} />
            </div>
            <div className="row">
                <label>Kategória</label>
                {/* <input type="number" onChange={(e) => setKategoriaId(parseInt(e.target.value))} /> */}
                <select onChange={(e) => setKategoriaId(parseInt(e.target.value))}>
                    {kategoriak.map((kategoria) => (
                        <option value={kategoria.id}>{kategoria.nev}</option>
                    ))}
                </select>
            </div>
            <div className="row">
                <button onClick={saveTree}>Mentés</button>
            </div>
        </div>
    );
};

export default NewTree;
