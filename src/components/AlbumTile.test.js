import AlbumTile from "./AlbumTile";
import React from "react";
import clash from "../data/images/clash.jpg";
import { mount } from "enzyme";

const mockData = {
  artist: "The Clash",
  albumName: "London Calling",
  genre: "punk",
  released: 1979,
  image: clash
};

describe("AlbumTile Tests", () => {
  let component;

  beforeEach(() => {
    component = mount(<AlbumTile album={mockData} />);
  });

  it("should contain a HTML image tag", () => {
    expect(component.find("img").length).toEqual(1);
  });

  it("should receive data passed as props from parent", () => {
    expect(component.props().album).toEqual(mockData);
  });

  it("should toggle isClicked state through handleClick method", () => {
    expect(component.state("isClicked")).toEqual(false);
    component.instance().handleClick();
    expect(component.state("isClicked")).toEqual(true);
    component.instance().handleClick();
    expect(component.state("isClicked")).toEqual(false);
  });

  it("should update isClicked state when component is clicked", () => {
    expect(component.state("isClicked")).toEqual(false);
    component.find("article").simulate("click");
    expect(component.state("isClicked")).toEqual(true);
  });
});
