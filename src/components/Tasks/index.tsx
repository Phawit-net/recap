import react from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import styled from '@emotion/styled'

interface Props {
  task: {
    id: number
    title: string
    desc: string
    color: string
  }
  index: number
}

interface ContainerProps {
  isDragging?: boolean
}

const Container = styled.div<ContainerProps>`
  border-radius: 10px;
  background-color: ${({ isDragging }) =>
    isDragging ? 'lightgreen' : 'white'};
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0px 7px 14px -3px rgba(176, 176, 176, 0.75);
`

const Tasks = ({ task, index }: Props): JSX.Element => {
  return (
    <Draggable draggableId={`${task.id}`} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps} // ย้ายไปไว้ที่ไหนมันจะเป็นตัว handle การ drag
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                backgroundColor: task.color,
                width: 5,
                height: 5,
                borderRadius: 5,
                marginRight: 5,
              }}
            ></div>
            <div style={{ fontSize: 18 }}>{task.title}</div>
          </div>
          <br />
          <div style={{ color: '#a7a7a7', fontSize: 14 }}>{task.desc}</div>
        </Container>
      )}
    </Draggable>
  )
}

export default Tasks
