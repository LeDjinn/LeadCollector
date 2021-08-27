require "test_helper"

class StaticControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get static_home_url
    assert_response :success
  end

  test "should get about" do
    get static_about_url
    assert_response :success
  end

  test "should get contact" do
    get static_contact_url
    assert_response :success
  end

  test "should get product" do
    get static_product_url
    assert_response :success
  end

  test "should get dashboard" do
    get static_dashboard_url
    assert_response :success
  end
end
