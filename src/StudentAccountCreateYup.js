import * as yup from 'yup';

export const Schema = yup.object().shape({

    rollNo:yup.string().min(4,"This Minimum 4 digit").required("This Field Is Required"),
    name:yup.string().min(3,"This Minimum 3 character").required("This Field Is Required"),
    section:yup.string().required("This Field Is Required"),
    dateOfBirth:yup.string().length(10,"Enter the Perfect Date Of Birth").required("This Field Is Required"),
    address:yup.string().required("This Field Is Required"),
    phone:yup.string().length(10,"Enter the Perfect Phone Number").required("This Field Is Required"),
    password:yup.string().min(5,"Enter Atleast 5 character").required("This Field Is Required"),
}
);