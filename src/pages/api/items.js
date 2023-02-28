

export default function handler(req, res) {
    res.status(200).json([{

        id: 1,
        title: "Tropibox",
        price: 1700,
        image: 'http://localhost:3000/img/holanda.png',
        stock: 20,
        category: 'blandos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non vehicula dolor, vestibulum tempor diam. Nulla elementum facilisis lacinia. Curabitur vulputate magna est, quis tincidunt metus efficitur sit amet. Fusce neque odio, accumsan a facilisis at, dapibus nec arcu. Quisque eget libero nec metus vehicula aliquet nec in lorem. Nullam posuere est sapien. Fusce quis ex a lectus vehicula pellentesque ut vitae nulla. Proin ultrices eu nunc at posuere.',

    },
    {
        id: 2,
        title: "cremoso",
        price: 1400,
        image: 'http://localhost:3000/img/cremoso.png',
        stock: 20,
        category: 'blandos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non vehicula dolor, vestibulum tempor diam. Nulla elementum facilisis lacinia. Curabitur vulputate magna est, quis tincidunt metus efficitur sit amet. Fusce neque odio, accumsan a facilisis at, dapibus nec arcu. Quisque eget libero nec metus vehicula aliquet nec in lorem. Nullam posuere est sapien. Fusce quis ex a lectus vehicula pellentesque ut vitae nulla. Proin ultrices eu nunc at posuere.',

    },
    {
        id: 3,
        title: "reggiano",
        price: 2100,
        image: 'http://localhost:3000/img/reggiano800.png',
        category: 'estacionados',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non vehicula dolor, vestibulum tempor diam. Nulla elementum facilisis lacinia. Curabitur vulputate magna est, quis tincidunt metus efficitur sit amet. Fusce neque odio, accumsan a facilisis at, dapibus nec arcu. Quisque eget libero nec metus vehicula aliquet nec in lorem. Nullam posuere est sapien. Fusce quis ex a lectus vehicula pellentesque ut vitae nulla. Proin ultrices eu nunc at posuere.',

    },
    {
        id: 4,
        title: "sardo",
        price: 1900,
        image: 'http://localhost:3000/img/sardo.png',
        stock: 20,
        category: 'duros',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non vehicula dolor, vestibulum tempor diam. Nulla elementum facilisis lacinia. Curabitur vulputate magna est, quis tincidunt metus efficitur sit amet. Fusce neque odio, accumsan a facilisis at, dapibus nec arcu. Quisque eget libero nec metus vehicula aliquet nec in lorem. Nullam posuere est sapien. Fusce quis ex a lectus vehicula pellentesque ut vitae nulla. Proin ultrices eu nunc at posuere.',

    },
    ])
}
