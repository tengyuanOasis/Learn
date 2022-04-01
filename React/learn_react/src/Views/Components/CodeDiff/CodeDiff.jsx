import React, { PureComponent } from 'react';
import ReactDiffViewer from 'react-diff-viewer';

const oldCode = `
云数据库 SQL Server 支持控制台续费和续费管理中心续费两种方式。

控制台续费
批量续费
登录 SQL Server 控制台，在实例列表，选择一个或多个需要续费的实例，单击【续费】。 
在弹出的续费对话框选择续费时长，单击【确定】。
确认订单信息后，单击【确认购买】。
订单支付成功，可继续查看订单，或返回控制台。
自动续费
在实例列表，选择一个或多个需要续费的实例，选择【更多操作】>【设置自动续费】。 

续费管理中心续费
在 续费管理页面，提供实例的【批量续费】、【设为自动续费】、【决定不续】、【统一到期日】等功能 ，详见 续费管理。
`;
const newCode = `
云数据库 SQL Server 仅支持包年包月实例进行续费。
续费费用 = 实例月单价 x 续费时间（月）+ (实例月单价 / 30 x 续费时间（天）)。
续费费用 = 实例月单价 x 续费时间（月）+ (实例月单价 / 30 x 续费时间（天）)
>?不足整月的部分，按照月价折算您续费天数的价格。例如4月5日到期的资源，月价格为60元，需要调整到期日为每月20日，续费至5月20日，您需要支付的金额为60 + 60 / 30 × 15 = 90元。
`;

export class CodeDiff extends PureComponent {
  render = () => {
    return (
      <ReactDiffViewer
        oldValue={oldCode}
        newValue={newCode}
        splitView={true}
        leftTitle="old"
        rightTitle="new"
      />
    );
  };
}