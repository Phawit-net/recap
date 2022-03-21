import PageLayout from '../../layouts/PageLayout'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useCallback, useState } from 'react'
import Columns from '../../components/Columns'

interface InitialType {
  tasks: {
    [key: string]: any
  }
  columns: {
    [key: string]: any
  }
  columnOrder: string[]
}

const OverviewPage = (): JSX.Element => {
  //จัดรูปแบบข้อมูล
  const initialData: InitialType = {
    tasks: {
      task1: {
        id: 'task1',
        title: 'Design',
        desc: 'We need 2 different concepts for a software page in our program.',
        color: '#2c9985',
      },
      task2: {
        id: 'task2',
        title: 'Development',
        desc: 'Secured web platform that will integrate and pull data from several other web apps to which i subscribe and have the api access to',
        color: '#ff9400',
      },
      task3: {
        id: 'task3',
        title: 'tesqweqweqt',
        desc: 'We need 2 different concepts for a software page in our program.',
        color: '#3a62f2',
      },
      task4: {
        id: 'task4',
        title: 'AA',
        desc: 'We need 2 different concepts for a software page in our program.',
        color: '#3a62f2',
      },
      task5: {
        id: 'task5',
        title: 'BBBBBBB',
        desc: 'We need 2 different concepts for a software page in our program.',
        color: '#3a62f2',
      },
    },
    columns: {
      column1: {
        id: 'column1',
        title: 'Todo',
        taskIds: ['task1', 'task2', 'task3'],
      },
      column2: {
        id: 'column2',
        title: 'In progress',
        taskIds: ['task4', 'task5'],
      },
      column3: {
        id: 'column3',
        title: 'Done',
        taskIds: [],
      },
    },
    columnOrder: ['column1', 'column2', 'column3'],
  }
  const [data, setData] = useState(initialData)

  const onDragStart = () => {
    // document.body.style.color = 'orange'
    // const ele = document.getElementsByClassName(
    //   'TaskCard',
    // ) as HTMLCollectionOf<HTMLElement>
    // console.log((ele[0].style.color = 'orange'))
  }

  const onDragEnd = (result: any) => {
    // document.body.style.color = 'inherit'

    const { destination, source, draggableId } = result
    if (!destination) {
      return
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }
    // const column = data.columns[source.droppableId]
    const start = data.columns[source.droppableId]
    const finish = data.columns[destination.droppableId]

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)
      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      }
      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      }

      setData(newState)
      return
    }

    //moveing from one list to another
    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    }

    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    }

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    }
    setData(newState)
  }

  return (
    <PageLayout>
      {/* <div style={{ display: 'flex', flexDirection: 'row' }}> */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          padding: '0px 20px',
        }}
      >
        <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
          {data.columnOrder.map((columnId) => {
            const column = data.columns[columnId]
            const tasks = column.taskIds.map(
              (taskId: string | number) => data.tasks[taskId],
            )
            return <Columns key={column.id} column={column} tasks={tasks} />
          })}
        </DragDropContext>
      </div>
      {/* </div> */}
    </PageLayout>
  )
}

export default OverviewPage
