import react from 'react'
import Tasks from '../Tasks'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import styled from '@emotion/styled'

interface Props {
  tasks: {
    [key: string]: any
  }
  column: {
    [key: string]: any
  }
}

interface TaskListProps {
  isDraggingOver?: boolean
}

const TaskList = styled.div<TaskListProps>`
  padding: 16px;
  background-color: ${({ isDraggingOver }) =>
    isDraggingOver ? 'skyblue' : '#f5f9f9'};
`

const Columns = ({ column, tasks }: Props): JSX.Element => {
  console.log(tasks)
  return (
    <div
      style={{
        margin: 8,
        borderRadius: 10,
        backgroundColor: '#f5f9f9',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '16px 16px 0px',
        }}
      >
        <div>{column.title}</div>
        <div
          style={{
            backgroundColor: '#e9f2f1',
            padding: '0px 6px',
            borderRadius: '3px',
          }}
        >
          <div>{tasks.length}</div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: '#e9f2f1',
          margin: '16px 16px 0px',
          borderRadius: 5,
        }}
      >
        <div
          style={{
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 200,
          }}
        >
          +
        </div>
      </div>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map(
              (
                task: {
                  id: number
                  title: string
                  desc: string
                  color: string
                },
                index: number,
              ) => (
                <Tasks key={task.id} task={task} index={index} />
              ),
            )}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </div>
  )
}

export default Columns
