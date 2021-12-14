require "test_helper"

class TokkensControllerTest < ActionDispatch::IntegrationTest
  setup do
    @tokken = tokkens(:one)
  end

  test "should get index" do
    get tokkens_url
    assert_response :success
  end

  test "should get new" do
    get new_tokken_url
    assert_response :success
  end

  test "should create tokken" do
    assert_difference('Tokken.count') do
      post tokkens_url, params: { tokken: { fbTokken: @tokken.fbTokken, gTokken: @tokken.gTokken } }
    end

    assert_redirected_to tokken_url(Tokken.last)
  end

  test "should show tokken" do
    get tokken_url(@tokken)
    assert_response :success
  end

  test "should get edit" do
    get edit_tokken_url(@tokken)
    assert_response :success
  end

  test "should update tokken" do
    patch tokken_url(@tokken), params: { tokken: { fbTokken: @tokken.fbTokken, gTokken: @tokken.gTokken } }
    assert_redirected_to tokken_url(@tokken)
  end

  test "should destroy tokken" do
    assert_difference('Tokken.count', -1) do
      delete tokken_url(@tokken)
    end

    assert_redirected_to tokkens_url
  end
end
