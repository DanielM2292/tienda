import React from 'react'
import { KanbanComponent, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-kanban'
import { Header } from '../components'
import { kanbanData, kanbanGrid } from '../data/dummy'

function Kanban () {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header
        category='App'
        title='Tablero Kanban'
      />
      <KanbanComponent
        id='kanban'
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Sumary', headerField: 'Id' }}
        keyField='Status'
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) =>
            <ColumnDirective
              key={index} {...item}
            />
          )}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default Kanban
