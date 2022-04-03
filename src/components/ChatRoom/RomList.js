import React from 'react'
import { Collapse, Typography } from 'antd';
import styled from 'styled-components';

const {Panel} = Collapse;

const PanelStyle = styled(Panel)`
    &&&{
        .ant-col{
            background-color: #f99707;
        }
        .ant-collapse-header, p{
            color: white;
        }
        .ant-collape-content-box {
            padding: 0 40px;
        }
    }
`;
export default function RomList() {
  return (
    <Collapse defaultActiveKey={['1']}>
        <PanelStyle ghost header="danh sach cac phong" key='1'>
            <Typography.Link>room 1</Typography.Link>
            <Typography.Link>room 2</Typography.Link>
            <Typography.Link>room 3</Typography.Link>
        </PanelStyle>
    </Collapse>
  )
}
