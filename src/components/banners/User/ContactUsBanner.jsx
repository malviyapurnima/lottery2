import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../../ui/Button";
import arrow from "../../../assets/images/arrow.svg";
import ContainerLayout from "../../../layouts/ContainerLayout";

function ContactUsBanner() {
    return (
        <>
            <div className="bg-[url('/src/assets/images/query-bg.png')] bg-cover	bg-no-repeat py-5 px-6 md:px-0 md:py-10">
                <ContainerLayout>
                    <div className="container mx-auto px-3">
                        <div className="flex flex-col md:flex-row md:items-end gap-y-8 justify-between">
                            <div className="flex-1 text-white md:text-[30px]">
                                <h3 className="text-[32]">
                                    If you have any query about lottery or anything!
                                </h3>
                            </div>
                            <Link to={'/contact'}>
                                <Button name={"Contact us"} arrowIcon={arrow} />
                            </Link>
                        </div>
                    </div>
                </ContainerLayout>
            </div>

        </>
    );
};

export default ContactUsBanner;