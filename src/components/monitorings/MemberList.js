import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { membersApi } from '../../api';

import { Table, Skeleton } from 'antd';

import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import { MdTimelapse } from 'react-icons/md';

import user from '../../assets/user.png';

function MemberList(props) {
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);
  const [membersInfos, setMembersInfos] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      setLoading(true);
      try {
        const response = await membersApi.list(props.je.id);
        if (response.status === 200) {
          console.log(response);
          setMembers(response.data.members);
        }
      } catch (err) {
        console.log(err);
        console.log(err.response);
      }
      setLoading(false);
    }
    fetchMembers();
  }, [props.je.id]);

  function handleStatusIcon(status) {
    console.log(status);
    if (status === 1)
      return <IoIosCheckmarkCircle style={{ color: "#89C03E" }} />;
    else if (status === 0)
      return <IoIosCloseCircle style={{ color: "#E71A23" }} />;
    else return <MdTimelapse />;
  }

  function handleStatus(status) {
    console.log(status);
    if (status === 1)
      return "Feito";
    else if (status === 0)
      return "Não feito";
    else return "Em andamento";

  }

  const columns = [
    {
      dataIndex: 'file',
      key: 'file',
      width: '4%',
      render: file => <img src={file ? file : user} alt="Foto de perfil" />,
    },
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      width: '25%',
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      key: 'dutyStatusIcon',
      width: '2%',
      render: (row) => handleStatusIcon(row.duty),
    },
    {
      title: 'Plantão',
      key: 'dutyStatus',
      width: '21%',
      render: (row) => handleStatus(row.duty),
      filters: [
        {
          text: 'Done',
          value: 'Feito',
        },
        {
          text: 'Not Done',
          value: 'Não feito',
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.duty.indexOf(value) === 0,
      sorter: (a, b) => a.duty.length - b.duty.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      dataIndex: 'isDutyDone',
      key:'duty',
      visible: false, 
    },
    {
      key: 'accStatusIcon',
      width: '2%',
      render: (row) => handleStatusIcon(row.acc),
    },
    {
      title: 'Acompanhamento',
      key: 'accStatus',
      width: '21%',
      render: (row) => handleStatus(row.acc),
      filters: [
        {
          text: 'Done',
          value: 'Feito',
        },
        {
          text: 'Not Done',
          value: 'Não feito',
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.acc.indexOf(value) === 0,
      sorter: (a, b) => a.acc.length - b.acc.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      dataIndex: 'acc',
      key: 'acc',
      visible: false,
    },
    {
      title: 'Cargo',
      dataIndex: 'position',
      key: 'position',
      width: '25%',
      sorter: (a, b) => a.position.length - b.position.length,
      sortDirections: ['descend', 'ascend'],
      ellipsis: true,
    },
  ];

  return (
    loading ? <Skeleton active avatar paragraph={{ rows: 2 }} /> :
    <div>
      <Table columns={columns.filter(column => column.visible !== false)} scroll={{ x: true }} dataSource={members} />
    </div>
  );
}

const mapStateToProps = state => ({
  je: state.je
});

export default connect(mapStateToProps)(MemberList);