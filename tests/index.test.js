import React from 'react';
import { configure, mount } from 'enzyme';
import wait from 'waait';
import useStateList from '../src';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('useStateList hook', () => {
  const listLength = 5;
  it('initializes a list to the correct length', () => {
    const check = jest.fn();
    const Test = () => {
      const [state, setState] = useStateList(listLength);
      check(state.length);
      return null;
    };
    mount(<Test />);
    expect(check).toBeCalledWith(listLength);
  });

  it('sets the correct index', async () => {
    const check = jest.fn();
    const Test = () => {
      const [state, setState] = useStateList(5);
      check(state[3]);
      return <button type="button" onClick={() => setState(3, 5)} />;
    };
    const wrapper = mount(<Test />);
    wrapper.find('button').simulate('click');
    await wait();
    wrapper.update();
    expect(check.mock.calls.length).toBe(2);
    expect(check.mock.calls[0][0]).toBe(undefined);
    expect(check.mock.calls[1][0]).toBe(5);
  });

  it('Works with list of length 1', async () => {
    const check = jest.fn();
    const Test = () => {
      const [state, setState] = useStateList(1);
      check(state[0]);
      return <button type="button" onClick={() => setState(0, 3)} />;
    };
    const wrapper = mount(<Test />);
    wrapper.find('button').simulate('click');
    await wait();
    wrapper.update();
    expect(check.mock.calls.length).toBe(2);
    expect(check.mock.calls[0][0]).toBe(undefined);
    expect(check.mock.calls[1][0]).toBe(3);
  });
});
