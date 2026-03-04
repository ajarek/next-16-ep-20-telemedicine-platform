import { Stethoscope, Baby, HeartPulse, Hand, Brain, UserRoundMinus, Venus, Apple } from "lucide-react";

export const specialtiesData = [
    {
        id: 1,
        title: "Lekarz Rodzinny/Internista",
        description: "Kompleksowa podstawowa opieka zdrowotna dla osób w każdym wieku.Od rutynowych badań kontrolnych po leczenie chorób przewlekłych.",
        icon: <Stethoscope className="size-6 text-primary" />,
        availability: "12",
    },
    {
        id: 2,
        title: "Pediatria",
        description: "Specjalistyczna opieka dla niemowląt, dzieci i młodzieży. Obejmuje rozwój, wzrost i leczenie chorób wieku dziecięcego.",
        icon: <Baby className="size-6 text-primary" />,
        availability: "18",
    },
    {
        id: 3,
        title: "Zdrowie psychiczne",
        description: "Profesjonalne wsparcie w leczeniu lęku, depresji, zarządzaniu stresem i dbaniu o dobrostan emocjonalny..",
        icon: <Brain className="size-6 text-primary" />,
        availability: "10",
    },
    {
        id: 4,
        title: "Dermatologia",
        description: "Specjalistyczne leczenie chorób skóry, trądziku, egzemy oraz problemów z zakresu dermatologii estetycznej.",
        icon: <Hand className="size-6 text-primary" />,
        availability: "8",
    },
    {
        id: 5,
        title: "Kardiologia",
        description: "Specjaliści zdrowia serca w leczeniu chorób układu krążenia, nadciśnienia oraz profilaktyce kardiologicznej.",
        icon: <HeartPulse className="size-6 text-primary" />,
        availability: "13",
    },
    {
        id: 6,
        title: "Ortopedia",
        description: "Leczenie schorzeń kości, stawów i mięśni. Wsparcie w leczeniu kontuzji sportowych i rehabilitacji.",
        icon: <UserRoundMinus className="size-6 text-primary" />,
        availability: "14",
    },
    {
        id: 7,
        title: "Zdrowie kobiety",
        description: "Kompleksowa opieka ginekologiczna, wsparcie w ciąży i usługi z zakresu zdrowia reprodukcyjnego.",
        icon: <Venus className="size-6 text-primary" />,
        availability: "20",
    },
    {
        id: 8,
        title: "Dietetyka",
        description: "Spersonalizowane porady żywieniowe, zarządzanie wagą i poradnictwo żywieniowe.",
        icon: <Apple className="size-6 text-primary" />,
        availability: "9",
    }
]