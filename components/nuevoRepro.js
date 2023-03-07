import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AudioPlayer2 } from './AudioPlayer2';
import styles from '../src/styles/nuevorepro.module.css'


export  default function NuevoRepro() {
    return (
        <div className={styles.reproTropi}>
            <div className={styles.Hero1}>
                <Card className={styles.Cardex}>
                    <Card.Img className={styles.CardImg} src='http://localhost:3000/img/01.png' />
                    <Card.Title>Tropibox</Card.Title>
                    <AudioPlayer2 />
                </Card>
            </div>
            <div className={styles.Hero2}>
                <Card.Text  >
                    Tropibox es la estacion de radio tropical por excelencia. Elegida por los Artistas, elegida por el publico.
                </Card.Text>
                <Button variant="dark">sitio web</Button>
            </div>
        </div>








    );
}

