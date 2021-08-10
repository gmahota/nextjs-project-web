/* eslint-disable react/display-name */
import React from "react";
import Router, { useRouter } from "next/router";

import { parseCookies } from "nookies";

//Components
import Datatable from "../../../components/elements/datatable/ActionsTable";
import SectionTitle from "../../../components/elements/section-title";
import Widget from "../../../components/elements/widget";
import { UnderlinedTabs } from "../../../components/elements/tabs";

import { FiEdit, FiPrinter, FiSend, FiTrash } from 'react-icons/fi';
import { AiFillFileExcel, AiFillFilePdf } from "react-icons/ai"

//Services
import projectService from "../../../services/projects";

export default function Project({ project }) {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Carregando...</p>;
  }

  const handlerEdit = () => { }

  const TabGeneral = () => {
    return (<>
      <div className="table table-auto w-full">
        <div className="table-row-group">

          <div className="table-row" >
            <div className="table-cell whitespace-nowrap px-2 text-sm">
              Name
            </div>
            <div className="table-cell px-2 whitespace-normal">
              {project.name}
            </div>
          </div>

          <div className="table-row" >
            <div className="table-cell whitespace-nowrap px-2 text-sm">
              Price
            </div>
            <div className="table-cell px-2 whitespace-normal">
              {project.price}
            </div>
          </div>

          <div className="table-row" >
            <div className="table-cell whitespace-nowrap px-2 text-sm">
              Status
            </div>
            <div className="table-cell px-2 whitespace-normal">
              {project.status}
            </div>
          </div>

        </div>
      </div> </>
    );
  }

  const TabTask = () => {
    const columns = React.useMemo(
      () => [
        {
          Header: "Id",
          accessor: "id"
        },
        {
          Header: "Description",
          accessor: "desc"
        },
        {
          Header: "Start",
          accessor: "start"
        },
        {
          Header: "Due Date",
          accessor: "dueDate"
        },
        {
          Header: "Assigned",
          accessor: "assigned"
        },
        {
          Header: "Priority",
          accessor: "priority"
        },
        {
          Header: "Status",
          accessor: "status",
        }
      ],
      []
    );
    const data = [
      {
        id: 1,
        desc: "Processo de Candidaturas",
        start: "2021-08-01",
        dueDate: "2021-08-12",
        status: "Aberto",
        priority: "Maxima",
        assigned: "DAF"
      },
      {
        id: 3,
        desc: "Gestão do Contrato",
        start: "2021-08-16",
        dueDate: "2021-09-15",
        status: "Aberto",
        priority: "Maxima",
        assigned: "Finanças"
      },
      {
        id: 4,
        desc: "Cobrança 1ª Prestação",
        start: "2021-09-25",
        dueDate: "2021-10-05",
        status: "Aberto",
        priority: "Media",
        assigned: "Finanças"
      },
      {
        id: 5,
        desc: "Cobrança 2ª Prestação",
        start: "2021-10-25",
        dueDate: "2021-11-05",
        status: "Aberto",
        priority: "Media",
        assigned: "Finanças"
      },
      {
        id: 6,
        desc: "Cobrança 3ª Prestação",
        start: "2021-11-25",
        dueDate: "2021-12-05",
        status: "Aberto",
        priority: "Media",
        assigned: "Finanças"
      },
    ];

    return <Datatable columns={columns} data={data} link="/projects"
      canView={true} canEdit={true}
      handlerEdit={handlerEdit} />;
  }

  const TabContract = () => {
    const columns = React.useMemo(
      () => [
        {
          Header: "Id",
          accessor: "id"
        },
        {
          Header: "Customer",
          accessor: "customer"
        },
        {
          Header: "Name",
          accessor: "name"
        },
        {
          Header: "Cellphone",
          accessor: "cellphone"
        },
        {
          Header: "Last Payment",
          accessor: "lastPayment"
        },
        {
          Header: "Date Last Payment",
          accessor: "dtLastPayment"
        },
        {
          Header: "Render",
          accessor: "render"
        },
        {
          Header: "Total Payment",
          accessor: "totalPayement"
        },
        {
          Header: "Total",
          accessor: "total"
        },
        {
          Header: "Status",
          accessor: "status",
        }
      ],
      []
    );
    const data = [
      {
        id: 1,
        customer: "C001",
        name: "Guimarães Mahota",
        cellphone: "849568415",
        lastPayment: "6000",
        dtLastPayment: "2021-08-10",
        totalPayement: "12000",
        total: "1000000",
        render: 2,
        status: "pedding"
      }
    ];

    return <Datatable columns={columns} data={data} link="/projects"
      canView={true} canEdit={true}
      handlerEdit={handlerEdit} />;
  }

  const TabBill = () => {
    const columns = React.useMemo(
      () => [
        {
          Header: "Id",
          accessor: "id"
        },
        {
          Header: "Date",
          accessor: "date"
        },
        {
          Header: "Document",
          accessor: "document"
        },
        {
          Header: "Customer",
          accessor: "customer"
        },
        {
          Header: "Name",
          accessor: "name"
        },
        {
          Header: "Total",
          accessor: "total"
        },
        {
          Header: "Status",
          accessor: "status",
        }
      ],
      []
    );
    const data = [
      {
        id: 1,
        date: "2021-07-10",
        document: "VD 2021/1",
        customer: "C001",
        name: "Guimarães Mahota",
        total: "1000000",
        status: "pedding"
      }
    ];

    return <Datatable columns={columns} data={data} link="/projects"
      canView={true} canEdit={true}
      handlerEdit={handlerEdit} />;
  }


  const TabOther = () => {
    return <></>
  }


  const tabs = [
    {
      index: 0,
      title: "General",
      active: true,
      content: <TabGeneral />,
    },
    {
      index: 1,
      title: "Task's",
      active: false,
      content: <TabTask />,
    },
    {
      index: 2,
      title: "Contract",
      active: false,
      content: <TabContract />,
    },
    {
      index: 3,
      title: "Bill's",
      active: false,
      content: <TabBill />,
    },
    {
      index: 4,
      title: "Attachment's",
      active: false,
      content: <TabBill />,
    },
    {
      index: 5,
      title: "Other",
      active: false,
      content: <TabOther />,
    },

  ];

  return (
    <>
      <SectionTitle title="Project" subtitle={`${project.code} - ${project.name}`} />
      <Widget
        title="Details"
        description={
          <span>
            {project.name}
          </span>
        }
        right={
          <div className="flex flex-col lg:flex-row lg:flex-wrap items-start lg:items-center justify-start space-y-2 lg:space-y-0 lg:space-x-2">

            <button
              className="btn btn-default btn-rounded bg-blue-500 hover:bg-blue-600 text-white"
              type="button">

              <FiEdit className="stroke-current text-white" size={18} />
              <span>Edit</span>
            </button>
            <button
              className="btn btn-default btn-rounded bg-blue-500 hover:bg-blue-600 text-white"
              type="button">

              <FiPrinter className="stroke-current text-white" size={18} />
              <span>Print</span>
            </button>
            <button
              className="btn btn-default btn-rounded bg-blue-500 hover:bg-blue-600 text-white"
              type="button">

              <FiSend className="stroke-current text-white" size={18} />
              <span>Send</span>
            </button>
            <button
              className="btn btn-default btn-rounded bg-blue-500 hover:bg-blue-600 text-white"
              type="button">

              <AiFillFileExcel className="stroke-current text-white" size={18} />
              <span>CSV</span>
            </button>
            <button
              className="btn btn-default btn-rounded bg-blue-500 hover:bg-blue-600 text-white"
              type="button">

              <AiFillFilePdf className="stroke-current text-white" size={18} />
              <span>PDF</span>
            </button>
            <button
              className="btn btn-default btn-rounded bg-red-500 hover:bg-red-600 text-white"
              type="button">

              <FiTrash className="stroke-current text-white" size={18} />
              <span>Remove</span>
            </button>
          </div>
        }
      >
        <UnderlinedTabs tabs={tabs} />
      </Widget>
    </>
  );
}


export const getServerSideProps = async (ctx) => {

  const { 'attendance.token': token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  const { id } = ctx.params;

  const project = await projectService.get_Project(id);

  return {
    props: {
      project
    }
  };

};
