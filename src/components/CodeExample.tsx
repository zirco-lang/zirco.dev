import { FadeIn } from "./FadeIn";

export function CodeExample() {
  const code = `const std = @import("std");
pub fn main() !void {
    const allocator = std.heap.page_allocator;
    
    // Explicit error handling
    const file = try std.fs.cwd().openFile("data.txt", .{});
    defer file.close();
    
    // Clear memory management
    var buffer = try allocator.alloc(u8, 1024);
    defer allocator.free(buffer);
    
    const bytes_read = try file.read(buffer);
    std.debug.print("Read {} bytes\\n", .{bytes_read});
}`;

  return (
    <section
      id="code-example"
      className="min-h-screen pt-16 md:pt-20 flex items-center bg-gray-50 dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <FadeIn delay={0.1}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 transition-colors duration-300">
              Simple and Explicit
            </h2>
            <div className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-700 dark:text-gray-300 transition-colors duration-300">
              <p>
                Every line of Zirco code is straightforward.
                Error handling is explicit with{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono text-sm transition-colors duration-300">
                  try
                </code>{" "}
                and{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono text-sm transition-colors duration-300">
                  catch
                </code>
                .
              </p>
              <p>
                Memory management is visible and deterministic.
                Use{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded font-mono text-sm transition-colors duration-300">
                  defer
                </code>{" "}
                to ensure cleanup happens exactly when you
                expect it.
              </p>
              <p>
                No garbage collection pauses. No hidden
                allocations. Full control over your program's
                behavior.
              </p>
            </div>
          </FadeIn>
          
          <div
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden w-full transition-colors duration-300"
          >
            <div className="overflow-x-auto">
              <pre className="p-3 sm:p-4 md:p-6 text-xs sm:text-sm min-w-max">
                <code className="font-mono text-gray-900 dark:text-gray-100 leading-relaxed block transition-colors duration-300">
                  {code}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}