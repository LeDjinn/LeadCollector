require "application_system_test_case"

class ContentwebsTest < ApplicationSystemTestCase
  setup do
    @contentweb = contentwebs(:one)
  end

  test "visiting the index" do
    visit contentwebs_url
    assert_selector "h1", text: "Contentwebs"
  end

  test "creating a Contentweb" do
    visit contentwebs_url
    click_on "New Contentweb"

    click_on "Create Contentweb"

    assert_text "Contentweb was successfully created"
    click_on "Back"
  end

  test "updating a Contentweb" do
    visit contentwebs_url
    click_on "Edit", match: :first

    click_on "Update Contentweb"

    assert_text "Contentweb was successfully updated"
    click_on "Back"
  end

  test "destroying a Contentweb" do
    visit contentwebs_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Contentweb was successfully destroyed"
  end
end
