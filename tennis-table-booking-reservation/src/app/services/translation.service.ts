import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  monthToSpanish(month: string): String {
    const getTranslatedMonth = (month: string): string => {
      switch (month.toUpperCase()) {
        case 'JANUARY':
          return 'Enero';
        case 'FEBRUARY':
          return 'Febrero';
        case 'MARCH':
          return 'Marzo';
        case 'APRIL':
          return 'Abril';
        case 'MAY':
          return 'Mayo';
        case 'JUNE':
          return 'Junio';
        case 'JULY':
          return 'Julio';
        case 'AUGUST':
          return 'Agosto';
        case 'SEPTEMBER':
          return 'Septiembre';
        case 'OCTOBER':
          return 'Octubre';
        case 'NOVEMBER':
          return 'Noviembre';
        case 'DECEMBER':
          return 'Diciembre';
        default:
          return 'TBD';
      }
    };

    return getTranslatedMonth(month)
  }

  dayToSpanish(day: string): string {
    const getTranslatedDay = (day: string): string => {
      switch (day.toUpperCase()) {
        case 'SUNDAY':
          return 'Domingo';
        case 'MONDAY':
          return 'Lunes';
        case 'TUESDAY':
          return 'Martes';
        case 'WEDNESDAY':
          return 'Miércoles';
        case 'THURSDAY':
          return 'Jueves';
        case 'FRIDAY':
          return 'Viernes';
        case 'SATURDAY':
          return 'Sábado';
        default:
          return 'TBD';
      }
    };

    return getTranslatedDay(day)
  }
}
