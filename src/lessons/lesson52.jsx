import { useState, useRef } from 'react'

export const meta = {
  id: 52,
  title: '할일 수정 (폼 없이)',
  subtitle: 'map으로 해당 id의 content만 교체한다',
  concepts: [
    'modifyTodo(id, newContent): todos.map으로 새 배열을 만든다',
    '해당 id면 { ...todo, content: newContent }로 교체, 아니면 그대로',
    '불변성: 기존 객체를 직접 바꾸지 말고 스프레드로 새 객체를 만든다',
  ],
}

function useTodos() {
  const [todos, setTodos] = useState([
    { id: 1, content: '리액트 복습하기' },
    { id: 2, content: '운동하기' },
  ])
  const lastId = useRef(2)

  const addTodo = (content) => {
    const id = ++lastId.current
    setTodos([...todos, { id, content }])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  // 해당 id만 content 교체. 나머지는 기존 참조 그대로 반환.
  const modifyTodo = (id, newContent) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, content: newContent } : todo,
      ),
    )
  }

  return { todos, addTodo, deleteTodo, modifyTodo }
}

function TodoListItem({ todo, onModify }) {
  return (
    <li className="flex items-center justify-between rounded bg-gray-50 px-3 py-2 text-sm">
      <span>{todo.content}</span>
      <button
        onClick={() => onModify(todo.id, '수정된 할일입니다')}
        className="ml-2 rounded bg-yellow-400 px-2 py-1 text-xs text-white hover:bg-yellow-500"
      >
        수정
      </button>
    </li>
  )
}

export default function Lesson() {
  const { todos, modifyTodo } = useTodos()

  return (
    <div>
      <p className="mb-3 text-xs text-gray-500">
        '수정' 버튼을 누르면 해당 할일의 내용이 정해진 문구로 바뀝니다.
      </p>
      <ul className="space-y-1">
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} onModify={modifyTodo} />
        ))}
      </ul>
    </div>
  )
}
