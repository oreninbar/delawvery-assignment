export default async function validation(values) {
  let errors = {};
  let regexName = /^[א-ת ,.'-]+$/i;
  let regexDate = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
  ;

  if (!values.firstName) {
    errors.firstName = "נדרש שם פרטי";
  } else if (!regexName.test(values.firstName)) {
    errors.firstName = "שם לא תקין";
  }

  if (!values.lastName) {
    errors.lastName = "נדרש שם משפחה";
  } else if (!regexName.test(values.lastName)) {
    errors.lastName = "שם משפחה לא תקין";
  }

  if (!values.date) {
    errors.date = "נדרש תאריך";
  } else if (!regexDate.test(values.date)) {
    console.log(values.date);
    errors.date = "תאריך לא תקין";
  }

  return errors;
}
