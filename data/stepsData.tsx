import { Calendar, Camera, LaptopMinimalCheck, Tablets, User } from "lucide-react";

export const stepsData = [
    {
        id: 1,
        icon: <Calendar className="w-12 h-12 text-primary"/>,
        title: "Zarezerwuj swoją wizytę",
        description: "Wybierz dogodny termin i specjalizację. Przejrzyj listę dostępnych lekarzy i wybierz tego, który pasuje do Twojego harmonogramu. Rezerwacja zajmuje mniej niż 2 minuty.",
        image: "/step-1-612x408.jpg",
    },
    {
        id: 2,
        icon: <Camera className="w-12 h-12 text-primary"/>,
        title: "Dołącz do konsultacji wideo",
        description: "Połącz się z lekarzem za pomocą bezpiecznego połączenia wideo w jakości HD. Omów swoje objawy, historię choroby i wątpliwości w prywatnym wirtualnym pokoju.",
        image: "/step-2-612x408.jpg",
    },
    {
        id: 3,
        icon: <Tablets className="w-12 h-12 text-primary"/>,
        title: "Odbierz e-receptę",
        description: "Otrzymaj e-recepty przesłane bezpośrednio do wybranej apteki. Pobierz plany leczenia i dokumentację medyczną natychmiast po konsultacji.",
        image: "/step-3-612x408.jpg",
    },
    {
        id: 4,
        icon: <LaptopMinimalCheck className="w-12 h-12 text-primary"/>,
        title: "Umów wizytę kontrolną",
        description: "W razie potrzeby umów wizyty kontrolne. Przeglądaj swoją pełną historię medyczną i zapisy konsultacji w dowolnym momencie za pośrednictwem panelu pacjenta.",
        image: "/step-4-612x408.jpg",
    },
]