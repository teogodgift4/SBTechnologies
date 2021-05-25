import moment from 'moment';
import Moment from 'react-moment';

 let findage = (param_age: string) => {
    //let param_age="1980-10-23";
   let age = param_age.split("-",1);
   let the_now: any = moment().year();
   let real_age = the_now - Number(age);
   return real_age;
}

export default findage;