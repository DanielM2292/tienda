/* eslint-disable no-unused-vars */
import React from 'react'
import {
  GridComponent, ColumnDirective, ColumnsDirective, Resize, Sort, ContextMenu,
  Filter, Page, Edit, Inject, ExcelExport, PdfExport
} from '@syncfusion/ej2-react-grids'
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import { Header } from '../components'
import { pdfExport } from '@syncfusion/ej2/pivotview'

const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header
        category='Page'
        title='Orders'
      />
      <GridComponent
        id='gridcomp'
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective
              key={index} {... item}
            />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]}
        />
      </GridComponent>
    </div>
  )
}

export default Orders
