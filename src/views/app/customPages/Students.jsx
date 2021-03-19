import React, { Fragment, useState } from "react";
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import DataListView from "../../../containers/pages/DataListView";
import IntlMessages from "../../../helpers/IntlMessages";
import DataListPages from "../pages/product/data-list";

const Students = ({ match }) => {
  const [isSelect, setIsSelect] = useState(true);
  const onCheckItem = (event, produtId) => {
    console.log(produtId);
    setIsSelect((preState) => !preState);
  };
  const product = {
    id: 1,
    title: "titile",
    category: "category",
    date: "date",
    statusColor: "red",
    status: "status",
  };

  return (
    <Fragment>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.students" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <p>
            <IntlMessages id="menu.students" />
          </p>
        </Colxx>
      </Row>
      <DataListView
        product={product}
        onCheckItem={onCheckItem}
        isSelect={isSelect}
      />
    </Fragment>
  );
};

export default Students;
