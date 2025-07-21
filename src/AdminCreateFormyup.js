import * as yup from 'yup';

export const Schema = yup.object().shape({
    adminname:yup.string().required("This Field Is Required"),
    bookname:yup.string().required("This Field Is Required"),
    category:yup.string().required("This Field Is Required"),
    establishDate:yup.string().length(10,"Needs A Exactly 10 Charaters").required("This Field Is Required"),
    totalPages:yup.number().positive("Please Enter The Positive Numbers").integer('Must be an integer').required("This Field Is Required"),
    password:yup.string().min(5, 'Password must be at least 5 characters long')
    .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Must contain at least one number')
    .matches(/[@$!%*?&]/, 'Must contain at least one special character (@$!%*?&)').required("This Field Is Required")
})