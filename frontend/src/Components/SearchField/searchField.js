import React from "react";
import "./index.css";
import search from "../../assets/svg/search.svg";
const SearchField = () => {
    return (
        <section className="input-section">
            <form action="">
                <select id="animal-search" name="animal">
                    <option value="cachorro">Cachorro</option>
                    <option value="gato">Gato</option>
                    <option value="hamister">Hamister</option>
                    <option value="passaro">Passaro</option>
                </select>
                <select name="aconteceu" id="aconteceu-search">
                    <option value="rua">Encontrado na rua</option>
                    <option value="doacao">Doação</option>
                    <option value="abrigo">Abrigo</option>
                </select>
                <input type="text" placeholder="CEP (opcional)" />
                <button type="submit">
                    <object data={search} type=""></object>
                    <p>Buscar</p>
                </button>
            </form>
        </section>
    );
};

export default SearchField;
