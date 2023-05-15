const CardConfig = [
    {
        component: "sections",
        children: [
            {
                component: "section",
                title: "Mapy",
                children: [
                    {
                        component: "section",
                        title: "Mapa Kampusu AGH",
                        children: [
                            {
                                component: "img",
                                src: "https://linki.kwasnyy.pl/mapa_agh.jpg",
                                title: "Mapa Kampusu AGH",
                            },
                        ]
                    },
                    {
                        component: "section",
                        title: "Mapa MS szachownica",
                        children: [
                            {
                                component: "img",
                                src: "https://linki.kwasnyy.pl/mapa-ms.png",
                            },
                        ]
                    },
                ]
            },
            {
                component: "section",
                title: " Dyski ",
                children: [
                    {
                        component: "link",
                        title: "Teleinfa publiczny",
                        herf: "https://drive.google.com/drive/u/2/folders/1NSCba6kPyWWXJAC_U0HTWfr5R11EblGW/",
                        children: "Nasz dysk. Zawiera folder Schneider"
                    },
                    {
                        component: "link",
                        title: "Materiały",
                        herf: "https://drive.google.com/drive/u/2/folders/1L4IAWn5C5_xExsQumxURZDJNMBDP8C4r",
                        children: "Nie nasz, ale tam jest bardzo dużo rzeczy."
                    },
                    {
                        component: "link",
                        title: "TI",
                        herf: "https://drive.google.com/drive/u/3/folders/1xWAkmxYUZa3R79IAFYYy6mzEDYiPkyFp",
                        children: "Content ze wszystkich semertrów"
                    }
                ]
            },
            {
                component: "section",
                title: "Plan zajęć 4 semestr ",
                isOpen: true,
                children: [
                    {
                        component: "img",
                        src: "https://linki.kwasnyy.pl/plan-sem3.png",
                    }
                ]
            },

        ]
    }
];
export default CardConfig;