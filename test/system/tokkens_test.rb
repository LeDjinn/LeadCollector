require "application_system_test_case"

class TokkensTest < ApplicationSystemTestCase
  setup do
    @tokken = tokkens(:one)
  end

  test "visiting the index" do
    visit tokkens_url
    assert_selector "h1", text: "Tokkens"
  end

  test "creating a Tokken" do
    visit tokkens_url
    click_on "New Tokken"

    fill_in "Fbtokken", with: @tokken.fbTokken
    fill_in "Gtokken", with: @tokken.gTokken
    click_on "Create Tokken"

    assert_text "Tokken was successfully created"
    click_on "Back"
  end

  test "updating a Tokken" do
    visit tokkens_url
    click_on "Edit", match: :first

    fill_in "Fbtokken", with: @tokken.fbTokken
    fill_in "Gtokken", with: @tokken.gTokken
    click_on "Update Tokken"

    assert_text "Tokken was successfully updated"
    click_on "Back"
  end

  test "destroying a Tokken" do
    visit tokkens_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Tokken was successfully destroyed"
  end
end
