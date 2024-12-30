
export type TypeStandardInputNames = "birthday" | "email" | "password" | "confirmPassword" | "name" | "surname" | "phone" | "code" | "city" | "street" | "houseNumber";
export type TypeRealEstateInputNames = "email" | "password" | "name" | "phone" | "city" | "street" | "houseNumber" | "apartment" | "floor" | "entry" | "neighborhood" | "price" | "rooms" | "floorSize" | "description" | "entryDate" | "furniture" | "pets" | "parking" | "elevator" | "airConditioner" | "bars" | "sunBalcony" | "kosherKitchen" | "renovated" | "tadiran" | "unit" | "balcony" | "mamad" | "storage" | "accessibility" | "longTerm" | "immediate" | "flexible";

// type extraInputsTypes = '';

export type InputTypes = "date" | "text" | "email" | "number" | "password" | "tel";

//defines the type of the input field
const typeMap: Record<TypeStandardInputNames, InputTypes> = {
  name: "text",
  surname: "text",
  phone: "tel",
  email: "email",
  password: "text",
  confirmPassword: "text",
  code: "text",
  city: "text",
  street: "text",
  houseNumber: "number",
  birthday: "date"
};



function getType(name: TypeStandardInputNames) {
  return typeMap[name as keyof typeof typeMap] || "text";
}

function getLabel(name: TypeStandardInputNames): string {
  const labelMap: Record<TypeStandardInputNames, string> = {
    name: "שם פרטי",
    surname: "שם משפחה",
    phone: "מספר טלפון",
    email: "מייל",
    password: "סיסמה",
    confirmPassword: "אימות סיסמה",
    code: "קוד",
    city: "עיר",
    street: "רחוב",
    houseNumber: "מספר בית",
    birthday: "תאריך לידה"
  };

  return labelMap[name] || "";
}

function getPlaceholder(name: TypeStandardInputNames): string {
  const placeholderMap: Record<TypeStandardInputNames, string> = {
    name: "הקלדת שם פרטי",
    surname: "הקלדת שם משפחה",
    phone: "מספר נייד",
    email: "yourmail@email.co.il",
    password: "הקלדת סיסמה",
    confirmPassword: "הקלדת סיסמה",
    code: "הזנת קוד",
    city: "הקלדת עיר",
    street: "הקלדת רחוב",
    houseNumber: "הקלדת מספר בית",
    birthday: "הקלדת תאריך לידה"
  };

  return placeholderMap[name] || "";
}


function getAutocomplete(name: TypeStandardInputNames): string {
  const labelMap: Record<TypeStandardInputNames, string> = {
    name: "given-name",
    surname: "family-name",
    phone: "tel-local",
    email: "email",
    password: "off",
    confirmPassword: "off",
    code: "one-time-code",
    city: "address-level2",
    street: "street-address",
    houseNumber: "address-line1",
    birthday: "bday"
  };

  return labelMap[name] || "";
}



export type fields = TypeStandardInputNames



const getFullInpData = (name: fields) => {
  return {
    label: getLabel(name),
    type: getType(name),
    placeholder: getPlaceholder(name),
    autoComplete: getAutocomplete(name),
    name
  };
};


//-------------------



export { getFullInpData, getLabel };
