require "test/unit/assertions"
include Test::Unit::Assertions
require_relative '../src/RoadSystem.rb'

def run_test_case(road_register, expected_result)
  result = solution(road_register)
  puts "Road Register: #{road_register.inspect}"
  puts "Expected Result: #{expected_result}"
  puts "Actual Result: #{result}"
  puts "Test Result: #{result == expected_result ? 'Passed' : 'Failed'}"
  puts "\n"
  assert_equal(expected_result, result, failure_message = 'Unexpected result' )
end

# Test Cases
road_register1 = [
  [false, true,  false, false],
  [false, false, true,  false],
  [true,  false, false, true ],
  [false, false, true,  false]
]
run_test_case(road_register1, true)

road_register2 = [
  [false, true,  false, false, false, false, false],
  [true,  false, false, false, false, false, false],
  [false, false, false, true,  false, false, false],
  [false, false, true,  false, false, false, false],
  [false, false, false, false, false, false, true ],
  [false, false, false, false, true,  false, false],
  [false, false, false, false, false, true,  false]
]
run_test_case(road_register2, true)

road_register3 = [
  [false, true,  false],
  [false, false, false],
  [true,  false, false]
]
run_test_case(road_register3, false)
