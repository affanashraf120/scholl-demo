import React, { Fragment } from "react";
import { Row } from "reactstrap";
import Calender from "../../../containers/dashboards/Calendar";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import IconCardsCarousel from "../../../containers/dashboards/IconCardsCarousel";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import IntlMessages from "../../../helpers/IntlMessages";

const Dashboard = ({ match }) => {
  return (
    <Fragment>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.dashboard" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <p>
            <IntlMessages id="menu.dashboard" />
          </p>
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <IconCardsCarousel />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <Calender />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default Dashboard;
