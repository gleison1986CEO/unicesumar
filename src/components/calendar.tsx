import {Box, Container, Badge } from '@mui/material';
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CalendarPicker, LocalizationProvider, PickersDay } from '@mui/lab';
import StarIcon from '../starIcon.svg';
import { ptBR } from 'date-fns/locale';


function Calendar() {
    const matches = useMediaQuery("(max-width:600px)");
    const [date, setDate] = useState<Date | null>(new Date());
    const highlightedDays = [
      new Date("2023-10-30T00:00:00.000").getTime(),
      new Date("2024-01-08T00:00:00.000").getTime(),
      new Date("2024-01-15T00:00:00.000").getTime(),
      new Date("2024-01-22T00:00:00.000").getTime(),
      new Date("2024-01-29T00:00:00.000").getTime(),
      new Date("2024-02-05T00:00:00.000").getTime(),
      new Date("2024-02-15T00:00:00.000").getTime(),
      new Date("2024-02-22T00:00:00.000").getTime(),
    ];
    const helperDates = {
      [new Date("2023-10-30T00:00:00.000").getTime()]:
        "Divulgação dos selecionados para as audições presenciais.",
      [new Date("2024-01-08T00:00:00.000").getTime()]:
        "T02 - Episódio 1.",
      [new Date("2024-01-15T00:00:00.000").getTime()]:
        "T02 - Episódio 2.",
      [new Date("2024-01-22T00:00:00.000").getTime()]:
        "T02 - Episódio 3",
      [new Date("2024-01-29T00:00:00.000").getTime()]:
        "T02 - Episódio 4",
      [new Date("2024-02-05T00:00:00.000").getTime()]:
        "T02 - Episódio 5",
      [new Date("2024-02-15T00:00:00.000").getTime()]: "T02 - Episódio 6.",
      [new Date("2024-02-22T00:00:00.000").getTime()]: "T02 - FINAL AO VIVO.",
    };
    const minDate = new Date("2024-01-01T00:00:00.000");
    const maxDate = new Date("2024-02-28T00:00:00.000");
  
    useEffect(() => {
      date?.setHours(0, 0, 0, 0);
    }, [date]);
  
    return (
      <div className="App">

<section id="section-schedule" style={{
    backgroundColor: "#ff6600",
    backgroundImage: "url('/bg-calendar.png')",
    backgroundPosition: "right bottom",
    backgroundRepeat: 'no-repeat'
  }}
  >
    <Container>
      <Box mb="40px">
        <h1 style={{
          color: "#ffffff",
          fontWeight: "bold",
          position: "relative",
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
          fontSize: "2.5rem"
        }}>Calendário</h1>
      </Box>
      <Box m="auto" bgcolor="#04248f" display={"flex"} flexDirection={matches ? 'column-reverse' : 'row'} width={'fit-content'} borderRadius={5}>
        <Box width="100%" minWidth="270px" maxWidth={"270px"} flex={1} p="30px" borderRight={matches ? "none" : "solid 2px #f1f55a"} borderTop={matches ? "solid 2px #f1f55a" : "none"}>
          <Box ml="auto" mr="auto" mb="20px" bgcolor="#002576" display={"grid"} alignItems={'center'} borderRadius={5} width={200} height={200}>
            <p style={{ color: "#fc16a4", fontSize: "100px", margin: 0 }}>
              {date?.getDate()}
            </p>
          </Box>
          <Box color="white">
            {date &&
              <p>{helperDates[date.getTime()]}</p>
            }
          </Box>
        </Box>
        <Box flex={1} color="white">
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
            <CalendarPicker
              minDate={minDate}
              maxDate={maxDate}
              date={date}
              onChange={(newDate: any) => setDate(newDate)}
              renderDay={(day: string | number | Date, _value: any, DayComponentProps:any) => {
                const isSelected =
                  !DayComponentProps.outsideCurrentMonth &&
                  highlightedDays.includes(new Date(day).getTime());
                return (
                  <Badge
                    key={day.toString()}
                    overlap="circular"
                    badgeContent={isSelected ? <img src={StarIcon} alt="Star" /> : undefined}
                  >
                    <PickersDay {...DayComponentProps} />
                  </Badge>
                )
              }}
            />
          </LocalizationProvider>
        </Box>
      </Box>
    </Container>
  </section>
  </div>
  );
}

export default Calendar;
