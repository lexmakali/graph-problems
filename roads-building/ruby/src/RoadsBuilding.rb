def solution(cities, roads)
  all_possible_roads = Set.new

  (0...cities).each do |x|
    (x + 1...cities).each do |y|
      all_possible_roads.add([x, y])
    end
  end

  array_set_difference(all_possible_roads.to_a, roads)
end

def array_set_difference(set_a, set_b)
  difference = []

  set_a.each do |array_a|
    unless set_b.any? { |array_b| arrays_equal(array_a, array_b) }
      difference << array_a.sort
    end
  end

  difference
end

def arrays_equal(arr1, arr2)
  return false if arr1.length != arr2.length

  (arr1 == arr2) || (arr1[0] == arr2[1] && arr1[1] == arr2[0])
end

# Example usage
cities = 4
roads = [[0, 1], [1, 2], [2, 3]]

result = solution(cities, roads)
puts "Result: #{result}"