import "./index.css";
//packages
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import CustomButtons from "../../components/CustomButtons";
import CustomInput from "../../components/CustomInput";
import Loader from "../../components/Loader";

//services
import { clearCompanyDetails, updateCompanyDetails } from "../../store/User";
import { getUserToken, searchAddress } from "../../store/User/actions";
import {
  Heading,
  email,
  password,
  placeHolders,
} from "../../services/constants";
import { findCountryCode } from "../../services/functions";

const DestinationCompanyAddress = () => {
  const { companyDetails, infoLoaded, countries } = useSelector(
    (state) => state.userState
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const body = {
      email: email(),
      password: password(),
    };
    dispatch(getUserToken(body));
  }, []);

  const search = () => {
    if (companyDetails.country.length < 1 || companyDetails.name.length < 2) {
      alert("Please Enter the Company Name and Country name");
      return;
    }
    const body = {
      country: findCountryCode(companyDetails.country),
      name: companyDetails.name,
    };
    dispatch(searchAddress(body));
  };
  const clear = () => {
    dispatch(clearCompanyDetails());
  };
  const onChange = (e) => {
    console.log(e.target.value, e.target.name);
    let temp = companyDetails;
    temp = {
      ...temp,
      [e.target.name]: e.target.value,
    };
    dispatch(updateCompanyDetails(temp));
  };

  return (
    <div className="modalBackdrop">
      <Loader />
      <div className="modal">
        <p className="heading">{Heading}</p>
        <div className="fields-container">
          <CustomInput
            label={placeHolders.name.title}
            placeholder={placeHolders.name.placeholder}
            value={companyDetails.name}
            name={"name"}
            onChange={onChange}
          />
          {infoLoaded && (
            <>
              <CustomInput
                label={placeHolders.location.title}
                placeholder={placeHolders.location.placeholder}
                value={companyDetails.location}
                name={"location"}
                onChange={onChange}
              />

              <CustomInput
                label={placeHolders.streetName.title}
                placeholder={placeHolders.streetName.placeholder}
                value={companyDetails.street_name}
                name={"street_name"}
                onChange={onChange}
              />

              <CustomInput
                label={placeHolders.streetNumber.title}
                placeholder={placeHolders.streetNumber.placeholder}
                value={companyDetails.house_number}
                name={"house_number"}
                onChange={onChange}
              />

              <CustomInput
                label={placeHolders.postCode.title}
                placeholder={placeHolders.postCode.placeholder}
                value={companyDetails.postal_code}
                name={"postal_code"}
                onChange={onChange}
              />

              <CustomInput
                label={placeHolders.city.title}
                placeholder={placeHolders.city.placeholder}
                value={companyDetails.city}
                name={"city"}
                onChange={onChange}
              />
            </>
          )}

          <CustomInput
            label={placeHolders.country.title}
            placeholder={placeHolders.country.placeholder}
            value={companyDetails.country}
            name={"country"}
            onChange={onChange}
          />
        </div>
        <CustomButtons
          onCloseClick={clear}
          isInfoLoaded={infoLoaded}
          onSearchClick={search}
        />
      </div>
    </div>
  );
};

export default DestinationCompanyAddress;
