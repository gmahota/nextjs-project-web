/* eslint-disable react/display-name */
import React, { useState } from "react";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";

import SectionTitle from "../../components/elements/section-title";
import Widget from "../../components/elements/widget";
import Datatable from "../../components/elements/datatable/ActionsTable";

import projectsService from "../../services/projects";

import { FiPlus } from 'react-icons/fi';
import { AiFillFileExcel } from "react-icons/ai"


export default function Schools({
  allProjects,
}) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Carregando...</p>;
  }

  const Simple = () => {
    const columns = React.useMemo(
      () => [
        {
          Header: "Id",
          accessor: "id"
        },
        {
          Header: "Code",
          accessor: "code"
        },
        {
          Header: "Name",
          accessor: "name"
        },
        {
          Header: "Status",
          accessor: "status",
        }
      ],
      []
    );
    const data = allProjects;
    return <Datatable columns={columns} data={data} link="/projects"
      canView={true} canEdit={true}
      handlerEdit={handlerEdit} />;
  };

  function handlerEdit(id) {
    router.push(`projects/${id}/edit`)
  }

  function handlerAddNew() {
    router.push("projects/new")
  }

  return (
    <>
      <SectionTitle title="Tables" subtitle="Projects" />
      <Widget
        title=""
        description=""
        right={
          <div className="flex flex-col lg:flex-row lg:flex-wrap items-start lg:items-center justify-start space-y-2 lg:space-y-0 lg:space-x-2">
            <button
              className="btn btn-default btn-rounded bg-green-500 hover:bg-green-600 text-white"
              type="button"
              onClick={handlerAddNew}>

              <AiFillFileExcel className="stroke-current text-white" size={18} />
              <span>Import Excell</span>
            </button>

            <button
              className="btn btn-default btn-rounded bg-blue-500 hover:bg-blue-600 text-white"
              type="button"
              onClick={handlerAddNew}>

              <FiPlus className="stroke-current text-white" size={18} />
              <span>Add New</span>
            </button>
          </div>

        }
      >
        <Simple />
      </Widget>
    </>
  );
}
export const getServerSideProps = async (ctx) => {
  const { "attendance.token": token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  //await apiClient.get('/users')

  const allProjects = await projectsService.get_Projects();

  return {
    props: {
      allProjects
    },
  };
};
