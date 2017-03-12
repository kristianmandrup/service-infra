import test from 'ava'
import { Input, Output } from './io'

test('new', t => {
  const input = new Input()
  t.is(input.constructor, Input)
})

test('Input.getStream no such stream', t => {
  const input = new Input()

  t.falsy(input.getStream('updated'))
})

test('Input.addStream', t => {
  const input = new Input()
  const name = 'my-stream'
  input.addStream(name)
  t.truthy(input.getStream(name))
})

test('Output.getStream no such stream', t => {
  const output = new Output()

  t.falsy(output.getStream('updated'))
})

test('Output.addStream', t => {
  const output = new Output()
  output.addStream('updated')

  const name = 'my-stream'
  output.addStream(name)
  t.truthy(output.getStream(name))
})

test('Output.removeStream no such stream', t => {
  const output = new Output()
  t.notThrows(() => { output.removeStream('updated') })
})

test('Output.removeStream find stream', t => {
  const output = new Output()
  const name = 'my-stream'
  output.addStream(name)
  output.removeStream('updated')
  t.falsy(output.getStream(name))
})

test('Output.removeAll no such stream', t => {
  const output = new Output()
  t.notThrows(() => { output.removeAll() })
})

test('Output.removeAll with streams', t => {
  const output = new Output()
  output.addStream('x', 'y')

  t.falsy(output.getStream('x'))
  t.falsy(output.getStream('y'))
})

