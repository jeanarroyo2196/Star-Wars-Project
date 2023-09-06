import React, { useState, useEffect } from "react";
import '../App.css';

const Person = ({personId}) => {
    const [person, setPerson] = useState(null);

    useEffect (() => {
        const fetPerson = async () => {
            const responseCharacters = await fetch(`https://swapi.dev/api/people/${personId}`);
            const dataCharacters = await responseCharacters.json();
            setPerson(dataCharacters);
        };

        fetPerson();

    }, [personId]);

    if(!person){
        return <div>Cargando...</div>
    }

    return (
        <div>
            <p>Nombre: {person.name}</p>
            <p>Altura: {person.height} cm</p>
            <p>Perso: {person.mass} kg</p>
        </div>
    )
};

const Films = ({filmsId}) => {
    const [films, setFilms] = useState(null);

    useEffect (() => {
        const fetFilms = async () => {
            const responseFilms = await fetch(`https://swapi.dev/api/films/${filmsId}`);
            const dataFilms = await responseFilms.json();
            setFilms(dataFilms);
        };

        fetFilms();

    }, [filmsId]);

    if(!films){
        return <div>Cargando...</div>
    }

    return (
        <div>
            <p>Título: {films.title}</p>
            <p>Episodio: {films.episode_id}</p>
            <p>Fecha de Estreno: {films.release_date}</p>
        </div>
    )
};

const Planets = ({planetsId}) => {
    const [planets, setPlanets] = useState(null);

    useEffect (() => {
        const fetPlanets = async () => {
            const responsePlanets = await fetch(`https://swapi.dev/api/planets/${planetsId}`);
            const dataPlanets = await responsePlanets.json();
            setPlanets(dataPlanets);
        };

        fetPlanets();

    }, [planetsId]);

    if(!planets){
        return <div>Cargando...</div>
    }

    return (
        <div>
            <p>Nombre: {planets.name}</p>
            <p>Clima: {planets.climate}</p>
            <p>Terreno: {planets.terrain}</p>
        </div>
    )
};

const CardGenerator = () => {

    // Generate and render the cards with the image, name and description

    const charactersCards = () => {

        const characters = [
            {
                id: 1,
                image: require("./Images/personaje 1.jpeg"),
                personComponent: <Person personId={4}/>
            },
            {
                id: 2,
                image: require("./Images/personaje 2.jpeg"),
                personComponent: <Person personId={10}/>
            },
            {
                id: 3,
                image: require("./Images/personaje 3.jpeg"),
                personComponent: <Person personId={3}/>
            }
        ];

        return characters.map ((character) => (
            <div key={character.id} className="character-list">
                <img src={character.image} alt={character.name} className="character-image"></img>
                <p>{character.personComponent}</p>
            </div>
        ))
    }

    const filmsCards = () => {

        const films = [
            {
                id: 1,
                image: require("./Images/episodio 1.jpg"),
                filmComponent: <Films filmsId={4}/>
            },
            {
                id: 2,
                image: require("./Images/episodio 2.jpg"),
                filmComponent: <Films filmsId={5}/>
            },
            {
                id: 3,
                image: require("./Images/espisodio 3.jpg"),
                filmComponent: <Films filmsId={6}/>
            }
        ];

        return films.map ((films) => (
            <div key={films.id} className="films-list">
                <img src={films.image} alt={films.title} className="films-image"></img>
                <p>{films.filmComponent}</p>
            </div>
        ))
    }

    const planetsCards = () => {

        const planets = [
            {
                id: 1,
                image: require("./Images/planeta 1.jpg"),
                planetComponent: <Planets planetsId={1}/>
            },
            {
                id: 2,
                image: require("./Images/planeta 2.jpeg"),
                planetComponent: <Planets planetsId={2}/>
            },
            {
                id: 3,
                image: require("./Images/planeta 3.jpg"),
                planetComponent: <Planets planetsId={3}/>
            }
        ];

        return planets.map ((planets) => (
            <div key={planets.id} className="planet-list">
                <img src={planets.image} alt={planets.title} className="planets-image"></img>
                <p>{planets.planetComponent}</p>
            </div>
        ))
    }

    return (
        <>
            <h3 className="info-character" id="title-1">Información de personajes</h3>
            <section>
                {charactersCards()}
            </section>
            <h3 className="info-films" id="title-2">Información de películas</h3>
            <section>
                {filmsCards()}
            </section>
            <h3 className="info-planets" id="title-3">Información de planetas</h3>
            <section>
                {planetsCards()}
            </section>
        </>
    )
}

export default CardGenerator;